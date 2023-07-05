import { useState } from 'react';
import { UserProfile } from '@/common.types';
import Image from 'next/image';
import Button from '@/components/Button';

type Props = {
    user: UserProfile;
    onSave: (updatedUser: UserProfile) => void;
};

const EditProfileForm = ({ user, onSave }: Props) => {
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [description, setDescription] = useState(user.description || '');
    const [avatarUrl, setAvatarUrl] = useState(user.avatarUrl);
    const [githubUrl, setGithubUrl] = useState(user.githubUrl || '');
    const [linkedinUrl, setLinkedinUrl] = useState(user.linkedinUrl || '');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const updatedUser: UserProfile = {
            id: user.id,
            name,
            email,
            description: description || null,
            avatarUrl,
            githubUrl: githubUrl || null,
            linkedinUrl: linkedinUrl || null,
            projects: user.projects,
        };

        onSave(updatedUser);
    };

    return (
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
            <div className="mb-6 flex items-center justify-center">
                <div className="relative w-24 h-24">
                    <Image
                        src={avatarUrl}
                        alt="User Avatar"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                    />
                </div>
            </div>
            <div className="mb-6">
                <label htmlFor="name" className="text-lg font-semibold mb-2 block">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="mb-6">
                <label htmlFor="email" className="text-lg font-semibold mb-2 block">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-6">
                <label htmlFor="description" className="text-lg font-semibold mb-2 block">
                    Description
                </label>
                <textarea
                    id="description"
                    className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className="mb-6">
                <label htmlFor="avatarUrl" className="text-lg font-semibold mb-2 block">
                    Avatar URL
                </label>
                <input
                    type="text"
                    id="avatarUrl"
                    className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    value={avatarUrl}
                    onChange={(e) => setAvatarUrl(e.target.value)}
                />
            </div>
            <div className="mb-6">
                <label htmlFor="githubUrl" className="text-lg font-semibold mb-2 block">
                    GitHub URL
                </label>
                <input
                    type="text"
                    id="githubUrl"
                    className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    value={githubUrl}
                    onChange={(e) => setGithubUrl(e.target.value)}
                />
            </div>
            <div className="mb-6">
                <label htmlFor="linkedinUrl" className="text-lg font-semibold mb-2 block">
                    LinkedIn URL
                </label>
                <input
                    type="text"
                    id="linkedinUrl"
                    className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    value={linkedinUrl}
                    onChange={(e) => setLinkedinUrl(e.target.value)}
                />
            </div>
            <div className="flex justify-end">
                <Button type="submit" title="Save" className="px-6 py-2" />
            </div>
        </form>
    );
};

export default EditProfileForm;
