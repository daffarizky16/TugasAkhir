import { useState, FormEvent } from 'react';
import { useSession, signIn } from 'next-auth/react';
import Button from './Button';
import Link from 'next/link';

const LoginForm = () => {
  const [npm, setNpm] = useState('');
  const [password, setPassword] = useState('');

  const handleNpmChange = (event: FormEvent<HTMLInputElement>) => {
    setNpm(event.currentTarget.value);
  };

  const handlePasswordChange = (event: FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Lakukan aksi yang diinginkan saat form dikirimkan (misalnya, validasi atau proses login).
    console.log('NPM:', npm);
    console.log('Password:', password);
  };
  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'login',
          npm,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data.message); // Login successful
        // Setelah login berhasil, Anda dapat mengarahkan pengguna ke halaman yang sesuai.
      } else {
        console.error(data.message); // Contoh: User not found atau Invalid password
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const submit = () => {};
  return (
    <form onSubmit={handleSubmit}>
      <div className="">
        <div>
          <input type="text" className="border-solid border-2 border-sky-500 px-3 py-2 w-80 mb-3" placeholder="NPM" value={npm} onChange={handleNpmChange} />
        </div>
        <div>
          <input type="password" className="border-solid border-2 border-sky-500 px-3 py-2 w-80 mb-4" placeholder="Password" value={password} onChange={handlePasswordChange} />
        </div>
        <Button text="Login" size="md" className="rounded-none mr-44" onClick={signIn} />
        <Link href="/login/Daftar">
          <a className="text-sm mb-10 font-thin hover:underline underline-offset-2">Daftar disini</a>
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
