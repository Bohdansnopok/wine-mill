"use client";

import { useEffect, useState } from "react";
import "./blog.scss";
import Blogs from "../../types/Blogs";
import Link from "next/link";

export default function Blog() {
  const [Blogs, setBlogs] = useState<Blogs[]>([]);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch("/mock/blogs.json");

        if (!response.ok) {
          throw new Error(
            `Не вдалося завантажити дані: ${response.statusText}`,
          );
        }

        const data: Blogs[] = await response.json();
        setBlogs(data);
      } catch (err: any) {
        console.error("Помилка завантаження даних:", err);
      }
    };

    fetchBlogData();

    setInterval(fetchBlogData, 60000);
  }, []);

  return (
    <section className="blog">
      <div className="container">
        <h3 className="blog__title">
          статьи о вине и <br />
          крепких напитках <br />
        </h3>

        <div className="blog__subtitle">
          Просто и понятно о винных стилях, регионах, сортах, о том, как выбрать
          вино, с чем его пить и из <br />
          какого бокала,о типах и особенностях виски, о разнице между игристым
          вином и шампанским. <br />
        </div>

        <div className="blog__content">
          {Blogs.length > 0 ? (
            Blogs.map((blog: Blogs) => (
              <Link href={`/blogItemDetails/${blog.id}`} key={blog.id} className="blog__content__link granashWine">
                <h1 className="blog__conten__link__title">{blog.drinkType}</h1>
                <p>{blog.title}</p>
                <a href="#">ЧИТАТЬ СТАТЬЮ</a>
              </Link>
            ))
          ) : (
            <p className="isLoading">Немає даних.</p>
          )}

          {/* <div className="blog__content__link miniGrouer">
            <h1 className="blog__conten__link__title">Wine</h1>
            <p>МАЛЕНЬКИЕ ГРОУЕРЫ ВНУТРИ БОЛЬШОЙ ШАМПАНИ</p>
            <a href="#">ЧИТАТЬ СТАТЬЮ</a>
          </div>

          <div className="blog__content__link newGen">
            <h1 className="blog__conten__link__title">Wine</h1>
            <p>НОВОЕ ПОКОЛЕНИЕ ВИНОДЕЛОВ: НА ЧТО ОЖИДАТЬ?</p>
            <a href="#">ЧИТАТЬ СТАТЬЮ</a>
          </div>

          <div className="blog__content__link armanyak">
            <h1 className="blog__conten__link__title">Wine</h1>
            <p>
              ИНВЕСТИЦИИ В АРМАНЬЯК: <br />
              СТОИТ ЛИ?
              <br />
            </p>
            <a href="#">ЧИТАТЬ СТАТЬЮ</a>
          </div> */}
        </div>
      </div>
    </section>
  );
}
