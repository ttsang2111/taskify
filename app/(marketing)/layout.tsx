const MarketingLayout = (
    {
        children
    }: {
        children: React.ReactNode
    }
) => {
    return (<div>
        {/* <Navbar /> */}

        <main className="h-full bg-slate-100">
            {children}
        </main>
        {/* <Navbar /> */}
    </div>)
}

export default MarketingLayout;