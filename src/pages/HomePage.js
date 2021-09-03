import React from 'react';
import Article from '../components/Article'
const articles = [
    {
        id: 1,
        title: "Jak sprzedać opla i mieć opla",
        author: "Mirek z Podlasia",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, ad ex modi nobis quis perspiciatis aperiam doloribus reiciendis tempore maiores quos rerum culpa numquam qui error eum magni hic sunt?"
    },
    {
        id: 2,
        title: "Jak pić by nikt nie widział",
        author: "Aleksander Kwaśniewski",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos nobis, numquam accusantium eligendi veniam fuga aut nesciunt facere modi debitis, repellat expedita, similique   suscipit porro soluta obcaecati alias nemo rerum. Lorem ipsum dolor sit  amet Czyli consectetur adipisicing elit. At quos ipsa obcaecati iste quae, architecto esse dolor avet pić doloremque corporis deserunt vero consectetur. Esse, voluptate beatae! Quod magni szybciej libero aliquid rem! Quisquam?"
    },
    {
        id: 3,
        title: "Czym jest speed paiting",
        author: "Squidmar",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
    }
]

const HomePage = () => {
    const artList = articles.map(article => (
        <Article key={article.id} {...article} />
    ))
    return (
        <div className="home">
            {artList}
        </div>
    )
}
export default HomePage;