import { merge } from 'lodash'
import { resolvers as activity } from './activity'
import { resolvers as archive } from './archive'
import { resolvers as converter } from './converter'
import { resolvers as coordinates } from './coordinates'
import { resolvers as dataset } from './dataset'
import { resolvers as exoplanet } from './exoplanet'
import { resolvers as findingchart } from './findingchart'
import { resolvers as fitfiles } from './fitfiles'
import { resolvers as instrument } from './instrument'
import { resolvers as interferometer } from './interferometer'
import { resolvers as nightlog } from './nightlog'

const resolvers = merge(
  activity,
  archive,
  converter,
  coordinates,
  dataset,
  exoplanet,
  findingchart,
  fitfiles,
  instrument,
  interferometer,
  nightlog
)

export default resolvers
