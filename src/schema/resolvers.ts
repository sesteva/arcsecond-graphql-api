import { merge } from 'lodash'
import { resolvers as activity } from './activity'
import { resolvers as archive } from './archive'
import { resolvers as converter } from './converter'
import { resolvers as coordinates } from './coordinates'
import { resolvers as dataset } from './dataset'

const resolvers = merge(activity, archive, converter, coordinates, dataset)

export default resolvers
