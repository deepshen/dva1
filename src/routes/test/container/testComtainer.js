import { connect } from 'dva'
import Test from '../component/Test'
import { namespace } from '../model/testModel'
import * as actions from '../model/action'


const mapStateToProps = state => ({
  a: state[namespace].a,
})

export default connect(mapStateToProps, actions)(Test)
