import { useState, FormEvent } from 'react';
import { useSession, signIn } from 'next-auth/react';
import Button from './Button';
import Link from 'next/link';

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [npm, setNpm] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event: FormEvent<HTMLInputElement>) => {
    setUsername(event.currentTarget.value);
  };
  const handleNpmChange = (event: FormEvent<HTMLInputElement>) => {
    setNpm(event.currentTarget.value);
  };

  const handlePasswordChange = (event: FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Lakukan aksi yang diinginkan saat form dikirimkan (misalnya, validasi atau proses login).
    console.log('Username:', username);
    console.log('Password:', password);
  };
  const submit = () => {};
  return (
    <form onSubmit={handleSubmit}>
      <div className="">
        <div>
          <input type="text" className="border-solid border-2 border-sky-500 px-3 py-2 w-80 mb-3" placeholder="Nama Lengkap" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <input type="text" className="border-solid border-2 border-sky-500 px-3 py-2 w-80 mb-3" placeholder="NPM" value={npm} onChange={handleNpmChange} />
        </div>
        <div>
          <input type="password" className="border-solid border-2 border-sky-500 px-3 py-2 w-80 mb-4" placeholder="Password" value={password} onChange={handlePasswordChange} />
        </div>
        <Button text="Daftar" size="md" className="rounded-none mr-44" onClick={signIn} />
        <Link href="/login">
          <a className="text-sm mb-10 font-thin hover:underline underline-offset-2">Login disini</a>
        </Link>
      </div>
    </form>
  );
};

export default SignUpForm;
