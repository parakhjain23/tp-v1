"use client"
import NewProductSpaceModal from '@/components/ProductSpace-Components/NewProductSpaceModal';
import React from 'react';

const spaces = [
    {
        "_id": "660b01c6b8519d63a08d5b67",
        "title": "work2",
        "createdBy": "660affa59237fb23b0e48db6",
        "createdAt": "2024-04-01T18:49:42.147Z",
        "updatedAt": "2024-04-01T18:49:42.147Z",
        "__v": 0
    },
    {
        "_id": "660b01d0b8519d63a08d5b6b",
        "title": "work3",
        "createdBy": "660affa59237fb23b0e48db6",
        "createdAt": "2024-04-01T18:49:52.352Z",
        "updatedAt": "2024-04-01T18:49:52.352Z",
        "__v": 0
    }
];

const ProductSpace = () => {

    const handleCreateNewProductSpace = () => {
        console.log("hello")
    }
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6 dark:bg-gray-900">
            <header className="w-full max-w-4xl mx-auto mb-6 flex justify-between items-center">
                <h1 className="text-3xl font-bold">Product Spaces</h1>
                <NewProductSpaceModal />
            </header>

            <main className="w-full max-w-4xl mx-auto">
                {spaces.length === 0 ? (
                    <p className="text-gray-600">No product spaces available.</p>
                ) : (
                    <ul className="space-y-4">
                        {spaces.map(space => (
                            <li
                                key={space._id}
                                className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center"
                            >
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-800">{space.title}</h2>
                                </div>
                                <NewProductSpaceModal isEdit/>
                                
                            </li>
                        ))}
                    </ul>
                )}
            </main>
        </div>
    );
};

export default ProductSpace;