import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Image from 'next/image'

type LoginPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const params = (await searchParams) ?? {}
  const hasError = params.error === '1'
  const from = typeof params.from === 'string' ? params.from : '/'
  const cookieStore = await cookies()

  if (cookieStore.get('prototype_auth')?.value) {
    redirect('/')
  }

  async function login(formData: FormData) {
    'use server'

    const submittedPassword = String(formData.get('password') ?? '')
    const redirectTo = String(formData.get('from') ?? '/')
    const expectedPassword = process.env.PROTOTYPE_PASSWORD

    if (!expectedPassword) {
      redirect('/login?error=1')
    }

    if (submittedPassword !== expectedPassword) {
      redirect(`/login?error=1&from=${encodeURIComponent(redirectTo)}`)
    }

    const authCookieStore = await cookies()
    authCookieStore.set('prototype_auth', '1', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    })

    redirect(redirectTo.startsWith('/') ? redirectTo : '/')
  }

  return (
    <div className="min-h-screen grid place-items-center px-6 py-10 bg-slate-50">
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl shadow-sm p-6 sm:p-7">
        <div className="flex items-center gap-3 mb-2">
          <Image src="/logos/bbc-play-icon.svg" alt="BBC Play" width={40} height={40} />
          <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">
            Play Product Hub
          </h1>
        </div>
        <p className="text-sm text-slate-500 mb-5">
          Enter the shared password to continue.
        </p>

        {hasError && (
          <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
            Incorrect password. Please try again.
          </div>
        )}

        <form action={login} className="space-y-3">
          <input type="hidden" name="from" value={from} />
          <label htmlFor="password" className="block text-sm font-medium text-slate-700">
            Shared password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            autoFocus
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-brand-500"
            placeholder="Enter password"
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-brand-600 text-white text-sm font-medium px-3 py-2.5 hover:bg-brand-700 transition-colors"
          >
            Continue
          </button>
        </form>

      </div>
    </div>
  )
}
