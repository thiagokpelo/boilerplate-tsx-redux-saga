/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Link from './index';

const stories = storiesOf('Components', module);

stories.add(
  'Link',
  () => <Link href="/#">Link</Link>,
);
