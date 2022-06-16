import style from './Blog.module.scss';

export default function Blog() {
    return (
        <section className={style['blog-intro']}>
            <h2 className={style['blog__title']}>Na dúvida sobre combinar suas roupas e ficar Incrível? <br></br> Confira nossas dicas em
                nosso blog.</h2>
            <article className={style['article-big']}>
                <div className={style['article-big__image']}>
                    <a href="./"><img src="images/products/blog-big.jpg" alt="mulher com roupa estilosa segurando uma bolsa"></img></a>
                </div>
                <p className={style['article-big__description']}>O que fazer com o look que usou no carnaval? Confira já como fazer uso dessas
                    mesmas peças no inverno e continuar na moda!</p>
            </article>
            <article className={`${style['article-small--top']} ${style.display}`}>
                <div className={style['article-small--top__image']}>
                    <a href="./"><img src="images/products/blog-small-top.png" alt="mulher com roupa estilosa de cor lilás"></img></a>
                </div>
                <p className={style['article-small--top__description']}>O que fazer com o look que usou no carnaval? Confira já como fazer uso dessas
                    mesmas peças no inverno e continuar na moda!</p>
            </article>
            <article className={`${style['article-small--bottom']} ${style.display}`}>
                <div className={style['article-small--bottom__image']}>
                    <a href="./"><img src="images/products/blog-small-bottom.jpg" alt="mulher com roupa de cores claras usando óculos escuro"></img></a>
                </div>
                <p className={style['article-small--bottom__description']}>O que fazer com o look que usou no carnaval? Confira já como fazer uso dessas
                    mesmas peças no inverno e continuar na moda!</p>
            </article>
        </section>
    );
}