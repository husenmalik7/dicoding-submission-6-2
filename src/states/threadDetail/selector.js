import { createSelector } from '@reduxjs/toolkit';
import { postedAt } from '../../utils';

const selectMappedThreads = createSelector(
  [(state) => state.threadDetail],
  (threadDetail) => {
    return {
      ...threadDetail,
      postedAt: postedAt(threadDetail?.createdAt ?? ''),
    };
  }
);

export default selectMappedThreads;
