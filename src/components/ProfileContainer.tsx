'use client';

import { useEffect, useState } from 'react';
import CodeBlock from './CodeBlock';
import { encryptEmail } from '@/lib/crypto';
import DOMPurify from 'dompurify';

type User = {
  id: string;
  name: string;
  email: string;
  publicKey: string;
};

const UserProfile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [encryptedEmail, setEncryptedEmail] = useState<string | null>(null);
  const [showEmail, setShowEmail] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch('/api/user');
      const data: User = await res.json();
      setUser(data);

      const encrypted = await encryptEmail(data.email);
      setEncryptedEmail(encrypted);
    };

    fetchUser();
  }, []);

  const handleShowEmail = () => {
    if (user) {
      setShowEmail(!showEmail);
    }
  };

  if (!user) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto text-white shadow-lg border border-gray-300 shadow-gray-600 p-6 rounded-lg space-y-4">
      <p><strong>ID:</strong> {user.id}</p>
      <p>
        <strong>Name:</strong> {DOMPurify.sanitize(user.name)}
      </p>
      <div>

      <div className="flex flex-row gap-1">
        <p className="text-sm"><strong>Email{!showEmail && ' (Encrypted)'}: </strong></p>
        <button
          onClick={handleShowEmail}
          className="px-2 rounded hover:bg-gray-200 transition duration-200 cursor-pointer text-xs border border-gray-300 mb-1"
        >
          {showEmail ? 'Encrypt' : 'Show Original'}
        </button>
      </div>
      {user.email && (
        <CodeBlock code={showEmail ? user.email : encryptedEmail} />
      )}
      </div>
      <div>
        <strong>Public Key:</strong>
        <CodeBlock code={user.publicKey} />
      </div>
    </div>
  );
};

export default UserProfile;
