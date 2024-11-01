import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import Edit from './edit';
import save from './save';

import './style.scss';

registerBlockType(metadata.name, {
    title: metadata.title,
    icon: metadata.icon,
    category: metadata.category,
    edit: Edit,
    save: save,
});
