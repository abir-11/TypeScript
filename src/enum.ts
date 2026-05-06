//enum

// set od fixed string leteral ek jagai rakhe

enum userRole {
    Admin = "Admin",
    Editor = "Editor",
    Viewer = "Viewer"
}

const canEdit = (role: userRole) => {
    if (role === userRole.Admin || role === userRole.Editor) {
        return true;
    }
    else {
        return false;
    }
}


const isEditPermissable=canEdit (userRole.Admin);
console.log(isEditPermissable);