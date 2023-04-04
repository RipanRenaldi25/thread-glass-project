/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { array, object } from 'prop-types';
import React from 'react';
import ThreadItem from './ThreadItem';

function ThreadList({ threads, users }) {
  if (users.users !== undefined) {
    return (
      <div>
        {threads.length > 0 ? threads.map((thread) => {
          const threadOwner = users.users.filter((user) => user.id === thread.ownerId)[0].name;
          return (<ThreadItem {...thread} key={thread.id} id={thread.id} owner={threadOwner} />);
        }) : (null)}
      </div>
    );
  }
}

export default ThreadList;
ThreadList.propTypes = {
  threads: array.isRequired,
  users: object.isRequired,
};
