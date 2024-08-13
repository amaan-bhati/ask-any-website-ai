interface PageProps{
    params: {
        url : string | string[] | undefined
    }
}

const Page = ({params }: PageProps) => {
    const reconstructedUrl = reconstuctedUrl ({ url : params.url as string[]})
    console.log(params)

    // await ragChat.context.add({
    //     type: "html",
    //     source:,
    // })

    return <p>hello</p>
}

export default Page