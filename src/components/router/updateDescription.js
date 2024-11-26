const updateMetaDescription = value => {
  if (!value) {
    return;
  }
  document.getElementsByTagName('meta')['description'].content = value;
};

export default updateMetaDescription;
