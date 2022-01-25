// https://medium.com/geekculture/how-to-use-react-router-useparams-436851fd5ef6

import { useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import EntryField from "./EntryField";

const Edit = ({ cards }) => {
  const { id } = useParams();

  return (
    <>
      {cards
        .filter((card) => card.id === id)
        .map((card) => (
          <div className="editor" key={card.id}>
            <div className="editor__wrapper-small">
              <div className="editor__field-small">
                <h3 className="editor__title">Название франшизы:</h3>
                <EntryField value={card.title} />
              </div>
              <div className="editor__field-small">
                <h3 className="editor__title">Категория:</h3>
                <EntryField value={card.category} />
              </div>
              <div className="editor__field-small">
                <h3 className="editor__title">Минимальная цена:</h3>
                <EntryField value={card.price_min.toLocaleString()} />
              </div>
              <div className="editor__field-small">
                <h3 className="editor__title">Максимальная цена:</h3>
                <EntryField value={card.price_max.toLocaleString()} />
              </div>
              <div className="editor__field-small">
                <h3 className="editor__title">В том числе паушальный взнос:</h3>
                <EntryField value={card.lump_sum} />
              </div>
              <div className="editor__field-small">
                <h3 className="editor__title">Прогнозируемая выручка:</h3>
                <EntryField value={card.forecast_revenue} />
              </div>
              <div className="editor__field-small">
                <h3 className="editor__title">Возможная чистая прибыль:</h3>
                <EntryField value={card.forecast_net_income} />
              </div>
              <div className="editor__field-small">
                <h3 className="editor__title">Роялти:</h3>
                <EntryField value={card.royalty_sum} />
              </div>
              <div className="editor__field-small">
                <h3 className="editor__title">Собственных предприятий:</h3>
                <EntryField value={card.num_enterpises} />
              </div>
              <div className="editor__field-small">
                <h3 className="editor__title">Франшизных предприятий:</h3>
                <EntryField value={card.num_franchises} />
              </div>
              <div className="editor__field-small">
                <h3 className="editor__title">Год запуска франчайзинга:</h3>
                <EntryField value={card.start_year} />
              </div>
              <div className="editor__field-small">
                <h3 className="editor__title">Срок запуска бизнеса:</h3>
                <EntryField value={card.start_period} />
              </div>
              <div className="editor__field-small">
                <h3 className="editor__title">Срок окупаемости:</h3>
                <EntryField value={card.payback_period} />
              </div>
              <div className="editor__field-small">
                <h3 className="editor__title">Год основания компании:</h3>
                <EntryField value={card.found_year} />
              </div>
            </div>

            <div className="editor__wrapper-large">
              <div>
                <h3 className="editor__title">Описание компании:</h3>
                <EntryField value={card.company_descr} />
              </div>

              <div>
                <h3 className="editor__title">Описание франшизы:</h3>
                <EntryField value={card.franch_descr} />
              </div>

              <div>
                <h3 className="editor__title">Поддержка:</h3>
                <EntryField value={card.support_descr} />
              </div>

              <div>
                <h3 className="editor__title">Требования к покупателям:</h3>
                <EntryField value={card.buyers_requirements} />
              </div>

              <div>
                <h3 className="editor__title">Требования к франшизе:</h3>
                <EntryField value={card.quarters_requirements} />
              </div>

              <NavLink className="editor__btn editor__btn-save" to="/">
                Сохранить изменения
              </NavLink>

              <NavLink className="editor__btn editor__btn-cancel" to="/">
                Вернуться к списку франшиз
              </NavLink>
            </div>
          </div>
        ))}
    </>
  );
};

export default Edit;
