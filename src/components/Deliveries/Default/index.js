import Article from "../Article";
import BlogSumary from "../BlogSummary";
import Head from "../Head";
import Timeline from "../Timeline";

const Default = () => {
    return (
        <section>
            <Head />
            <Timeline />
            <BlogSumary />
            <Article />
        </section>
    )
}

export default Default;