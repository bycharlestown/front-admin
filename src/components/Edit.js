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
            <NavLink to="/">Вернуться к списку франшиз</NavLink>

            <h3 className="editor__title">Название франшизы:</h3>
            <EntryField
              className="editor__input editor__input-small"
              value={card.title}
            />

            <h3 className="editor__title">Категория:</h3>
            <EntryField
              className="editor__input editor__input-small"
              value={card.category}
            />

            <h3 className="editor__title">Минимальная цена:</h3>
            <EntryField
              className="editor__input editor__input-small"
              value={card.price_min.toLocaleString()}
            />

            <h3 className="editor__title">Максимальная цена:</h3>
            <EntryField
              className="editor__input editor__input-small"
              value={card.price_max.toLocaleString()}
            />

            <h3 className="editor__title">В том числе паушальный взнос:</h3>
            <EntryField
              className="editor__input editor__input-small"
              value={card.lump_sum}
            />

            <h3 className="editor__title">Прогнозируемая выручка:</h3>
            <EntryField
              className="editor__input editor__input-small"
              value={card.forecast_revenue}
            />

            <h3 className="editor__title">Возможная чистая прибыль:</h3>
            <EntryField
              className="editor__input editor__input-small"
              value={card.forecast_net_income}
            />

            <h3 className="editor__title">Роялти:</h3>
            <EntryField
              className="editor__input editor__input-small"
              value={card.royalty_sum}
            />

            <h3 className="editor__title">Собственных предприятий:</h3>
            <EntryField
              className="editor__input editor__input-small"
              value={card.num_enterpises}
            />

            <h3 className="editor__title">Франшизных предприятий:</h3>
            <EntryField
              className="editor__input editor__input-small"
              value={card.num_franchises}
            />

            <h3 className="editor__title">Год запуска франчайзинга:</h3>
            <EntryField
              className="editor__input editor__input-small"
              value={card.start_year}
            />

            <h3 className="editor__title">Срок запуска бизнеса:</h3>
            <EntryField
              className="editor__input editor__input-small"
              value={card.start_period}
            />

            <h3 className="editor__title">Срок окупаемости:</h3>
            <EntryField
              className="editor__input editor__input-small"
              value={card.payback_period}
            />

            <h3 className="editor__title">Год основания компании:</h3>
            <EntryField
              className="editor__input editor__input-small"
              value={card.found_year}
            />

            <h3 className="editor__title">Описание компании:</h3>
            <EntryField
              className="editor__input editor__input-large"
              value={card.company_descr}
            />

            <h3 className="editor__title">Описание франшизы:</h3>
            <EntryField
              className="editor__input editor__input-large"
              value={card.franch_descr}
            />

            <h3 className="editor__title">Поддержка:</h3>
            <EntryField
              className="editor__input editor__input-large"
              value={card.support_descr}
            />

            <h3 className="editor__title">Требования к покупателям:</h3>
            <EntryField
              className="editor__input editor__input-large"
              value={card.buyers_requirements}
            />

            <h3 className="editor__title">Требования к франшизе:</h3>
            <EntryField
              className="editor__input editor__input-large"
              value={card.quarters_requirements}
            />
          </div>
        ))}
    </>
  );
};

export default Edit;
