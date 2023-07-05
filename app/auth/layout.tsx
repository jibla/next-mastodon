export default function Layout(props: {
    children: React.ReactNode
    nextAuthSignin: React.ReactNode
  }) {
    return (
      <>
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <div>
            {props.children}
          </div>
          <div>
            {props.nextAuthSignin}
          </div>
        </div>
      </>
    )
  }