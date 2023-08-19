import MealsRequestEmptyState from './MealsRequestEmptyState'
import MealsRequestRoot from './MealsRequestRoot'
import MealsRequestTableHeader from './MealsRequestTableHeader'
import MealsRequestTableHeaderCell from './MealsRequestTableHeaderCell'
import MealsRequestTableRoot from './MealsRequestTableRoot'
import MealsRequestTableRow from './MealsRequestTableRow'
import MealsRequestTableRowContent from './MealsRequestTableRowContent'
import MealsRequestTableRowContentCell from './MealsRequestTableRowContentCell'
import MealsRequestTableRowEditButton from './MealsRequestTableRowEditButton'
import MealsRequestTitle from './MealsRequestTitle'

const MealRequest = {
  Root: MealsRequestRoot,
  Title: MealsRequestTitle,
  EmptyState: MealsRequestEmptyState,
  Table: MealsRequestTableRoot,
  TableHeader: MealsRequestTableHeader,
  HeaderCell: MealsRequestTableHeaderCell,
  TableRow: MealsRequestTableRow,
  RowContent: MealsRequestTableRowContent,
  RowContentCell: MealsRequestTableRowContentCell,
  RowEditButton: MealsRequestTableRowEditButton,
}

export default MealRequest
