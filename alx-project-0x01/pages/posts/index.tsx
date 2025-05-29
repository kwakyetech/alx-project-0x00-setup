import React from 'react';
import PostCard from '../../components/common/PostCard';

const PostsPage: React.FC = () => (
  <div className="p-10">
    <h1 className="text-2xl mb-4">Posts Page</h1>
    <PostCard />
  </div>
);

export default PostsPage;