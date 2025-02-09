import Image from "next/image";
import ResumeUpload from '../components/ResumeUpload';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold font-news mb-4 bg-gradient-to-r bg-clip-text 
            text-transparent from-gray-900 to-slate-900">
            Upload your resume to automatically apply for jobs, as they are posted.
          </h1>
          <div className="text-lg font-newsone my-4 py-2 w-fit mx-auto">
            Upload your resume and let <p className="font-bold inline">AI</p> provide you with a {" "}
            <p className="font-bold inline bg-gradient-to-r bg-clip-text from-blue-800 to-gray-900 text-transparent">focused application portfolio.</p>
          </div>
        </div>
        <ResumeUpload />
      </div>
    </main>
  );
}

