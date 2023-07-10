export interface MsgProps {
  username: string;
  useremail: string;
  message: string;
}

export const createWppLink = ({ username, useremail, message }: MsgProps) => {
  const BASE_URL = "https://wa.me/549?text=";
  const msg = `Nombre: ${username}\nEmail: ${useremail}\nMensaje: ${message}`;
  return BASE_URL + encodeURIComponent(msg);
};

export const openWpp = (formData: MsgProps) => {
  try {
    const newTab = window.open();
    newTab!.location.href = createWppLink(formData);
  } catch {
    // Evita un error en mobile cuándo se bloquea el popUp
    console.log("No se pudo abrir WhatsApp");
  }
};
