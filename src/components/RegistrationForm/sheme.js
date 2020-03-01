import * as yup from 'yup';

const phoneRegex = /^\+380\d{3}\d{2}\d{2}\d{2}$/;
const FILE_SIZE = 5 * 1024 * 1024;
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg'];

const Schema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(60, 'Name must be at most 60 characters')
    .required('Name is required'),
  email: yup
    .string()
    .email('Email not valid')
    .required('Email is required'),
  phone: yup
    .string()
    .matches(phoneRegex, 'Phone not valid')
    .required('Phone is required'),
  position_id: yup.string().required('Position is required'),
  photo: yup
    .mixed()
    .required('Photo is required')
    .test(
      'fileFormat',
      'Unsupported Format',
      value => value && SUPPORTED_FORMATS.includes(value.file.type),
    )
    .test(
      'fileSize',
      'File too large',
      value => value && value.file.size <= FILE_SIZE,
    )
    .test(
      'fileResolution',
      'Require at least 70x70px resolution',
      value =>
        value &&
        value.dimensions &&
        value.dimensions.width >= 70 &&
        value.dimensions.height >= 70,
    ),
});
export default Schema;
