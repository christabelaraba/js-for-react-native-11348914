let idCounter = 1;

function createUserProfiles(names, modifiedNames) {
  return names.map((name, index) => {
    const userProfile = {
      originalName: name,
      modifiedName: modifiedNames[index],
      id: idCounter,
    };
    idCounter++; 
    return userProfile;
  });
}
