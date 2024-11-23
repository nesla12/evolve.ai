import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Share2, Users } from 'lucide-react';
import { useStore } from '../store/useStore';

export default function CommunityFeed() {
  const { communities } = useStore();

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Community</h2>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          New Post
        </button>
      </div>

      <div className="space-y-6">
        {communities.map((community) => (
          <div key={community.id} className="space-y-6">
            {community.posts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="border border-gray-200 rounded-lg p-4"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src={post.author.avatar || `https://ui-avatars.com/api/?name=${post.author.name}`}
                    alt={post.author.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h3 className="font-medium text-gray-800">{post.author.name}</h3>
                    <p className="text-sm text-gray-500">
                      {new Date(post.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{post.content}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-red-500">
                      <Heart className="w-5 h-5" />
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500">
                      <MessageCircle className="w-5 h-5" />
                      <span>{post.comments.length}</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-green-500">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Users className="w-5 h-5 mr-1" />
                    <span>{community.members} members</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}