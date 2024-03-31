import withInstall from '../../utils/install';
import _MMenu from './index.vue';
import type { MenuItem } from './index.vue';

export const MMenu = withInstall(_MMenu);
export type MMenuItem = MenuItem;

export default MMenu;
