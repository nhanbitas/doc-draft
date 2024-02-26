document.addEventListener("HTMLParsed", () => {});

const showToastBasic = () => {
  const htmlToast = document.getElementById("basic-toast-id");
  htmlToast._instance.show();
};

const showToastInfo = () => {
  const htmlToast = document.getElementById("info-id");
  htmlToast._instance.show();
};

const showToastSuccess = () => {
    const htmlToast = document.getElementById('success-id');
    htmlToast._instance.show();
};

const showToastWarning = () => {
    const htmlToast = document.getElementById('warning-id');
    htmlToast._instance.show();
};

const showToastDanger = () => {
    const htmlToast = document.getElementById('danger-id');
    htmlToast._instance.show();
};

const showToastAutoHide = () => {
    const htmlToast = document.getElementById('toast-auto-hide-id');
    htmlToast._instance.show();
};

const showTopRightToast = () => {
    const htmlToast = document.getElementById('top-right-toast-id');
    htmlToast._instance.show();
};

const showBottomCenterToast = () => {
    const htmlToast = document.getElementById('bottom-center-toast-id');
    htmlToast._instance.show();
};

const createAccount = () => {
    //call api create account...

    //show toast
    const configActionToast = {
    type: 'success',
    title: 'Create account successful',
    duration: 4000,
    message: 'Your account was created successful',
    details: '<a class="text-blue-500" href="#">Go to login</a>',
    };
    const newToast = Opera.createToast(configActionToast);
    newToast.show();
};

const showErrorToast = () => {
    const configErrorToast = {
    type: 'danger',
    duration: 2000,
    position: 'bottom-center',
    title: 'Submitting failed',
    message: 'Please try filling the form again',
    icon: '<i class="far fa-alert-octagon w-5 h-5 self-start text-red"></i>',
    };
    const newToast = Opera.createToast(configErrorToast);

    //callback and event for show
    newToast.element.addEventListener('toastShown', () => {
    console.log('Do something when toast show');
    });
    newToast.show(() => console.log('Do something when toast show'));

    //event for hide
    newToast.element.addEventListener('toastHidden', () => {
    console.log('Do something when toast hide');
    });
};