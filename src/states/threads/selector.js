import { createSelector } from '@reduxjs/toolkit';
import { postedAt } from '../../utils';

const selectMappedThreads = createSelector(
  [(state) => state.threads, (state) => state.users],
  (threads, usersById) => {
    return threads.map((thread) => {
      const owner = usersById[thread.ownerId];

      return {
        ...thread,
        ownerName: owner ? owner.name : 'anonym',
        postedAt: postedAt(thread.createdAt),
      };
    });
  }
);

export default selectMappedThreads;
