import { Claims, getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";

async function AccountPage(){
  const user = (await getSession())?.user;

  
  const EmailLabel = ({ user }: { user: Claims | undefined }) => {
    //User not set so do not render the element
    if (!user) return undefined;

    return <span >{`Logged in User's Email: ${user.email}`}</span>
  }

    return <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className='text-xl'>Account Page</h1>      
      <EmailLabel user={user} />
    </main>
}

export default withPageAuthRequired(AccountPage);