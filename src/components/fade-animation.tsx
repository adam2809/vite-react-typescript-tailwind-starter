import { motion } from 'framer-motion'
import { y } from 'framer-motion/dist/types.d-B50aGbjN'

type FadeAnimationProps = {
  className?: string
  children: React.ReactNode
}
const FadeAnimation = (props: FadeAnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className={props.className}
    >
      {props.children}
    </motion.div>
  )
}

export default FadeAnimation
