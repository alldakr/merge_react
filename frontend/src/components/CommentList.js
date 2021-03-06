import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { useAppContext } from 'store';
import { axiosInstance, useAxios } from 'api';
import Comment from './Comment';

export default function CommentList({ post }) {
    const {
        store: { jwtToken },
    } = useAppContext();
    const [commentContent, setCommentComment] = useState('');

    const headers = { Authorization: `Bearer ${jwtToken}` };

    const [{ data: commentList, loading, error }, refetch] = useAxios({
        url: `/api/posts/${post.id}/comments`,
        headers,
    });

    const handleCommentSave = async () => {
        const apiUrl = `/api/posts/${post.id}/comments/`;
        try {
            await axiosInstance.post(
                apiUrl,
                { message: commentContent },
                { headers }
            );
            setCommentComment('');
            refetch();
        } catch (error) {
            console.log('error:', error);
        }

        console.group('handleCommentSave');
        console.log(commentContent);
        console.groupEnd();
    };

    return (
        <div>
            {commentList &&
                commentList.map((comment) => {
                    return <Comment key={comment.id} comment={comment} />;
                })}
            <Input.TextArea
                style={{ marginBottom: '.5em' }}
                value={commentContent}
                onChange={(e) => setCommentComment(e.target.value)}
            />
            <Button
                block
                type='primary'
                disabled={commentContent.length === 0}
                onClick={handleCommentSave}>
                댓글 쓰기
            </Button>
        </div>
    );
}
