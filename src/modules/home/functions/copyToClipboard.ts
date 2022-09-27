const copyToClipboard = () => {
  const value = "mc.cubecave.net";

  navigator.clipboard.writeText(value);

  alert("IP Copiado com sucesso!");
};

export { copyToClipboard };
