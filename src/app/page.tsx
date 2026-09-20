import Link from "next/link";
import { BookOpen, Shield, Award, Users, Play, CheckCircle } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-900 font-bold text-white">
              DA
            </div>
            <span className="text-xl font-bold text-blue-900">Dhyani Academy</span>
          </Link>
          <div className="hidden gap-8 md:flex">
            <Link href="/courses" className="text-gray-700 hover:text-blue-900">Courses</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-900">About</Link>
            <Link href="/demo" className="text-gray-700 hover:text-blue-900">Demo</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-900">Contact</Link>
          </div>
          <div className="flex gap-3">
            <Link href="/auth/login" className="btn-outline !px-4 !py-2 text-sm">Login</Link>
            <Link href="/auth/register" className="btn-primary !px-4 !py-2 text-sm">Register</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-900">
                <Shield className="h-4 w-4" /> Secure Learning Platform
              </div>
              <h1 className="mb-6 text-4xl font-bold leading-tight text-blue-900 md:text-6xl">
                CMA Classes – Learn Smarter. Prepare Better.
              </h1>
              <p className="mb-8 text-lg text-gray-600">
                Structured CMA lectures, expert guidance and focused preparation — all in one secure learning platform.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/courses" className="btn-primary">
                  Explore Courses
                </Link>
                <Link href="/auth/login" className="btn-outline">
                  Student Login
                </Link>
                <Link href="/demo" className="btn-outline">
                  <Play className="mr-2 h-4 w-4" /> Watch Demo
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>DRM Protected</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Watermarked Videos</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Expert Faculty</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900 to-blue-700 shadow-2xl">
                <div className="flex h-full items-center justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur">
                    <Play className="h-10 w-10 fill-white text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-blue-900 md:text-4xl">Why Choose Dhyani Academy?</h2>
            <p className="text-lg text-gray-600">Everything you need to succeed in CMA exams</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Shield, title: "Secure Streaming", desc: "DRM protection with dynamic watermarking for safe learning." },
              { icon: BookOpen, title: "Structured Content", desc: "Chapter-wise organized lectures following the CMA syllabus." },
              { icon: Award, title: "Expert Faculty", desc: "Learn from experienced CMA professionals and mentors." },
              { icon: Users, title: "Personal Guidance", desc: "Direct access to doubt-solving and mentorship." },
              { icon: Play, title: "Learn Anywhere", desc: "Access lectures on desktop, tablet or mobile seamlessly." },
              { icon: CheckCircle, title: "Track Progress", desc: "Monitor your learning with detailed analytics." },
            ].map((f, i) => (
              <div key={i} className="card">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                  <f.icon className="h-6 w-6 text-blue-900" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-blue-900">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Ready to Start Your CMA Journey?</h2>
          <p className="mb-8 text-lg text-blue-100">Join hundreds of students preparing smart with Dhyani Academy.</p>
          <Link href="/auth/register" className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 font-semibold text-blue-900 transition hover:bg-gray-100">
            Create Free Account
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-900 text-sm font-bold text-white">DA</div>
                <span className="font-bold text-blue-900">Dhyani Academy</span>
              </div>
              <p className="text-sm text-gray-600">Secure CMA learning platform for serious students.</p>
            </div>
            <div>
              <h4 className="mb-3 font-semibold text-blue-900">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/courses">Courses</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 font-semibold text-blue-900">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms & Conditions</Link></li>
                <li><Link href="/refund">Refund Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 font-semibold text-blue-900">Contact</h4>
              <p className="text-sm text-gray-600">support@dhyaniacademy.in</p>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Dhyani Academy. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}