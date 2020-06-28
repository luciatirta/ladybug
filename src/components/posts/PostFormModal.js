import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import { getModules, getFollowedModules } from '../../actions/module';
import { addPost } from '../../actions/post';

const PostFormModal = ({
  addPost,
  setShowing,
  setSelectedModule,
  getFollowedModules,
  getModules,
  module: { followedModules, modules, loading },
  user,
}) => {
  let moduleList;

  useEffect(() => {
    getFollowedModules();
    getModules();
  }, [getModules, getFollowedModules]);

  const [formData, setFormData] = useState({
    title: '',
    text: '',
    author: `${user._id}`,
    module: '',
  });

  const { title, text, author, module } = formData;

  moduleList = _.mapValues(_.keyBy(modules, '_id'));

  const closeModalHandler = () => {
    setShowing(false);
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const newPost = { post: formData };
    addPost(newPost);
    setSelectedModule(formData.module);
    closeModalHandler();
    // console.log(newPost);
  };

  const actions = (
    <Fragment>
      <button type="submit" form="myform" className="ui button red-button">
        Post
      </button>
      <button onClick={closeModalHandler} className="ui button">
        Cancel
      </button>
    </Fragment>
  );

  const content = (
    <form id="myform" className="ui form" onSubmit={(e) => onSubmit(e)}>
      <div className="field">
        <label className="header">Category</label>
        <select
          name="module"
          value={module}
          onChange={(e) => onChange(e)}
          className="ui selection dropdown"
        >
          <option value="">Select Post Category</option>
          {followedModules.length > 0 &&
            followedModules.map((university) =>
              university.modules.map((module) => (
                <option
                  key={module}
                  value={`${module}`}
                >{`${university.acronym} - ${moduleList[module].name}`}</option>
              ))
            )}
        </select>
      </div>
      <div className="field">
        <label className="header">Summary</label>
        <div className="ui input">
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => onChange(e)}
            placeholder="Write one sentence summary"
          />
        </div>
      </div>
      <div className="field">
        <label className="">Content</label>
        <div className="ui input">
          <textarea
            name="text"
            value={text}
            onChange={(e) => onChange(e)}
            placeholder="Write details for the question"
          ></textarea>
        </div>
      </div>
    </form>
  );

  return (
    !loading &&
    moduleList &&
    followedModules &&
    user && (
      <Modal
        onDismiss={closeModalHandler}
        title="Create a Post"
        content={content}
        actions={actions}
      />
    )
  );
};

PostFormModal.propTypes = {
  module: PropTypes.object.isRequired,
  getFollowedModules: PropTypes.func.isRequired,
  getModules: PropTypes.func.isRequired,
  addPost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  module: state.module,
  user: state.auth.user,
});

export default connect(mapStateToProps, {
  getFollowedModules,
  getModules,
  addPost,
})(PostFormModal);