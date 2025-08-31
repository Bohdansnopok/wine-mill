"use client";

import Image from "next/image";
import "./SommelierChoise.scss";
import wineMill from "../../../public/wine-mill.png";
import Link from "next/link";
import { useConsultationVisibilityStore } from "@/store/consultationVisibilityStore";

export default function SommelierChoise() {
  const showModal = useConsultationVisibilityStore((state) => state.show);

  return (
    <section className="sommelierChoise">
      <div className="container">
        <div className="sommelierChoise__topContent">
          <div>
            <Image src={wineMill} alt="" />
          </div>
          <div className="sommelierChoise__leftContent">
            <h1>Sommelier Choice</h1>
            <h2>
              НЕ УВЕРЕНЫ В ВЫБОРЕ? <br />
              МЫ ГОТОВЫ ПОМОЧЬ! <br />
            </h2>
            <button onClick={showModal}>ЗАКАЗАТЬ КОНСУЛЬТАЦИЮ</button>
          </div>
        </div>

        <div className="sommelierChoise__bottomContent">
          <div className="topWrapper">
            <div>
              <p>
                Благодаря рекомендациям наших опытных кавистов, вы сможете не
                только
              </p>
              <p>
                приобрести ту самую бутылку вина, но и узнать много нового о
                сочетаниях,{" "}
              </p>
              <p>
                подборе гастрономической пары, необходимости декантации,
                хранении и{" "}
              </p>
              <p>сервировке</p>
            </div>

            <div>
              <p>
                Мы с удовольствием поделимся с Вами самыми главными винными
                секретами, а{" "}
              </p>
              <p>
                также поможем подобрать идеальные букет и вкус, соответствующие
                поводу, вашим{" "}
              </p>
              <p>предпочтениям и статусу</p>
            </div>
          </div>

          <Link href="/blog">УЗНАТЬ БОЛЬШЕ</Link>
        </div>
      </div>
    </section>
  );
}
