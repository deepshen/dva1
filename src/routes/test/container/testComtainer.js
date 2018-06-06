import { connect } from 'dva'
import Test from '../component/Test'
import { namespace } from '../model/testModel'

const mapStateToProps = state => ({
  a: state[namespace].a,
})

export default connect(mapStateToProps)(Test)
