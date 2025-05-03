import UserProfile from '@/components/ProfileContainer';

export default function ProfilePage() {
  return (
    <main className="min-h-screen p-8 mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">User Profile</h1>
      <UserProfile />
    </main>
  );
}
