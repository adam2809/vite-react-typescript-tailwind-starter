import { motion } from 'framer-motion'

type FadeAnimationProps = {
    className?: string;
    children: React.ReactNode;
}
const FadeAnimation = (props : FadeAnimationProps) => {
  return (
    <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        exit={{ opacity: 0}}
        className={props.className}
    >
        { props.children }
    </motion.div>
  );
};

export default FadeAnimation;