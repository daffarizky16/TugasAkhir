import SignUpForm from '../../components/signup';
import Link from 'next/link';

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center container h-screen m-auto">
      <div>
        <Link href="/">
          <a className="text-6xl font-thin ">Voting-Ku</a>
        </Link>
        <h1 className="mt-5">Daftar Akun dibawah ini</h1>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUp;
