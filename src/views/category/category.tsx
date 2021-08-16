import { useLocation, useParams } from 'react-router-dom';

import { ItemType, ItemsParams } from 'api';
import Seo from 'components/seo';
import ItemsListInfinite from 'containers/itemsListInfinite';
import useApiInfinite from 'hooks/useApiInfinite';
import useSearchParams from 'hooks/useSearchParams';

const CATEGORY_TYPES: Record<ItemType, string> = {
  movie: 'Фильмы',
  serial: 'Сериалы',
  concert: 'Концерты',
  documovie: 'Документальные фильмы',
  docuserial: 'Документальные сериалы',
  tvshow: 'ТВ Шоу',
};

const getCategoryByType = (categoryType?: ItemType) => {
  return (categoryType ? CATEGORY_TYPES[categoryType] : categoryType) || '';
};

const CategoryView: React.FC = () => {
  const { categoryType } = useParams<{ categoryType: ItemType }>();
  const searchParams = useSearchParams();
  const location = useLocation<{ params?: ItemsParams; title?: string }>();
  const { params, title = getCategoryByType(categoryType) } = location.state || {};

  const queryResult = useApiInfinite('items', [
    {
      ...searchParams,
      ...params,
      type: categoryType,
    },
  ]);

  return (
    <>
      <Seo title={title} />
      <ItemsListInfinite title={title} queryResult={queryResult} />
    </>
  );
};

export default CategoryView;
