import { TabNavigator } from 'react-navigation';

import Car from './car';
import Peaple from './peaple';

export default TabNavigator({
  Car: { screen: Car },
  Peaple: { screen: Peaple },
});
