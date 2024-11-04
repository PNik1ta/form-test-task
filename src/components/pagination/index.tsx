import styles from './styles.module.scss';
import { IPaginationProps } from './pagination.props';
import cn from 'classnames';


export default function Pagination({ className, ...props }: IPaginationProps) {
	return <div className={cn(styles.pagination, className)} {...props}>
		<button className={styles.active}>1</button>
		<button>1</button>
		<span>...</span>
		<button>4</button>
		<img src='/pagination.svg' alt="pagination icon" />
	</div>
}