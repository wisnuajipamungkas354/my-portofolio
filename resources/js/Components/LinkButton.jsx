import { Link } from '@inertiajs/react';
import React from 'react';

export default function LinkButton({ url, children, color, customColor }) {

  const colors = {
    primary: "bg-blue-700 hover:bg-blue-600 text-white",
    warning: "bg-yellow-700 hover:bg-yellow-600 text-white",
    danger: "bg-red-700 hover:bg-red-600 text-white",
  }

  return (
    <Link href={url} className={`p-2 m-2 border-none rounded-lg inline-block font-semibold ${colors[color]} ${customColor}`}>{children}</Link>
  );
}