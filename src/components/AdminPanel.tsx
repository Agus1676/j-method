import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';
import { SiteContent } from '../types';

export const AdminPanel: React.FC = () => {
  const {
    content,
    updateContent,
    resetToDefaults,
    exportConfigJson,
    importConfigJson,
    isAdminOpen,
    setIsAdminOpen,
    verifyPassword,
    changePassword,
    isAuthenticated,
    setIsAuthenticated,
  } = useContent();

  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState('');
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [lockoutTime, setLockoutTime] = useState(0);

  const [activeTab, setActiveTab] = useState<'profile' | 'hero' | 'bio' | 'skills' | 'faq' | 'system'>('profile');
  const [formState, setFormState] = useState<SiteContent>(content);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Security password change state
  const [newPassword, setNewPassword] = useState('');
  const [passChangeSuccess, setPassChangeSuccess] = useState('');

  // Sync internal form when context content changes or admin opens
  React.useEffect(() => {
    if (isAdminOpen) {
      setFormState(content);
    }
  }, [isAdminOpen, content]);

  // Lockout countdown timer
  React.useEffect(() => {
    if (lockoutTime > 0) {
      const timer = setTimeout(() => setLockoutTime((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [lockoutTime]);

  if (!isAdminOpen) return null;

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (lockoutTime > 0) return;

    const isValid = await verifyPassword(passwordInput);
    if (isValid) {
      setIsAuthenticated(true);
      setAuthError('');
      setPasswordInput('');
      setFailedAttempts(0);
      showToast('¡Acceso concedido al Panel de Administración!');
    } else {
      const newAttempts = failedAttempts + 1;
      setFailedAttempts(newAttempts);
      if (newAttempts >= 5) {
        setLockoutTime(60);
        setAuthError('Demasiados intentos fallidos. Bloqueado temporalmente por 60 segundos por seguridad.');
      } else {
        setAuthError(`Contraseña incorrecta. Intentos restantes: ${5 - newAttempts}`);
      }
    }
  };

  const handleSave = () => {
    updateContent(formState);
    showToast('✓ ¡Todos los cambios han sido guardados y aplicados en la web!');
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, targetField: 'coach' | 'hero1' | 'hero2') => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2.5 * 1024 * 1024) {
        alert('La imagen no debe superar los 2.5MB.');
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (targetField === 'coach') {
          setFormState((prev) => ({ ...prev, coach: { ...prev.coach, image: result } }));
        } else if (targetField === 'hero1') {
          setFormState((prev) => ({ ...prev, coach: { ...prev.coach, heroImage1: result } }));
        } else if (targetField === 'hero2') {
          setFormState((prev) => ({ ...prev, coach: { ...prev.coach, heroImage2: result } }));
        }
        showToast('Foto cargada con éxito. Recordá hacer clic en Guardar Cambios.');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleExport = () => {
    const json = exportConfigJson();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `j-method-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Copia de seguridad descargada con éxito.');
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target?.result as string;
        const res = importConfigJson(text);
        if (res.success) {
          showToast('✓ Copia de seguridad restaurada correctamente.');
        } else {
          alert(`Error: ${res.error}`);
        }
      };
      reader.readAsText(file);
    }
  };

  const handleReset = () => {
    if (window.confirm('¿Estás seguro de restablecer todos los textos y datos originales de la web?')) {
      resetToDefaults();
      showToast('Valores originales restablecidos.');
    }
  };

  const handlePasswordChangeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword.length < 6) {
      alert('La nueva contraseña debe tener al menos 6 caracteres.');
      return;
    }
    await changePassword(newPassword);
    setNewPassword('');
    setPassChangeSuccess('✓ Contraseña actualizada con éxito.');
    setTimeout(() => setPassChangeSuccess(''), 3000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="admin-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
    >
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-[#ef4255] text-white px-5 py-2.5 rounded-lg shadow-2xl font-bold text-xs animate-jm-enter flex items-center gap-2">
          <span>✓</span>
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="bg-[#121217] border border-white/[0.15] rounded-[18px] w-full max-w-[880px] max-h-[92vh] flex flex-col shadow-[0_25px_70px_rgba(0,0,0,0.8)] overflow-hidden">
        {/* Header Bar */}
        <div className="px-5 py-4 border-b border-white/[0.1] bg-[#0c0c10] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="jm-monogram text-[26px]">
              j<span>/</span>
            </span>
            <div>
              <h2 id="admin-title" className="text-sm font-extrabold tracking-wider uppercase text-white">
                PANEL DE ADMINISTRACIÓN CMS · J-METHOD
              </h2>
              <span className="text-[10px] text-[#8e8c9b]">
                Edición en vivo de textos, fotos, redes y enlaces sin tocar código
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              setIsAdminOpen(false);
              window.location.hash = '';
            }}
            className="text-white/60 hover:text-white text-xl font-bold p-1 px-2.5 rounded-md hover:bg-white/10 transition-colors"
            aria-label="Cerrar panel de administración"
          >
            ✕
          </button>
        </div>

        {/* Content Body */}
        {!isAuthenticated ? (
          /* AUTH LOGIN VIEW */
          <div className="p-8 sm:p-12 text-center max-w-[420px] mx-auto flex-1 flex flex-col justify-center">
            <span className="text-3xl mb-3 block">🔒</span>
            <h3 className="text-lg font-extrabold text-white mb-2">Acceso Exclusivo para Jorge Daniel</h3>
            <p className="text-xs text-[#9d9aa8] mb-6 leading-relaxed">
              Ingresá tu clave de seguridad para editar todo el contenido de tu web.
            </p>

            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="password"
                placeholder="Contraseña de administrador"
                value={passwordInput}
                disabled={lockoutTime > 0}
                onChange={(e) => setPasswordInput(e.target.value)}
                className="w-full bg-[#09090d] border border-white/20 rounded-lg px-4 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#ef4255]"
                required
              />

              {authError && (
                <p className="text-[11px] text-[#ef4255] font-semibold leading-tight">
                  {authError} {lockoutTime > 0 && `(Espera ${lockoutTime}s)`}
                </p>
              )}

              <button
                type="submit"
                disabled={lockoutTime > 0}
                className="jm-btn-primary w-full justify-center text-xs py-2.5"
              >
                <span>INGRESAR AL PANEL</span>
                <span>→</span>
              </button>
            </form>

            <small className="block text-[10px] text-white/40 mt-4">
              Clave predeterminada inicial: <strong className="text-white/70">jmethod2026</strong>
            </small>
          </div>
        ) : (
          /* DASHBOARD VIEW */
          <div className="flex-1 flex flex-col min-h-0">
            {/* Tabs Bar */}
            <div className="flex flex-wrap border-b border-white/[0.08] bg-[#0e0e13] px-3 gap-1 overflow-x-auto text-[11px] font-bold">
              {[
                { id: 'profile', label: '👤 Contacto & Redes' },
                { id: 'hero', label: '⚡ Hero & Portada' },
                { id: 'bio', label: '🏋️‍♂️ Sobre Mí & Coaching' },
                { id: 'skills', label: '🎯 Habilidades' },
                { id: 'faq', label: '❓ Preguntas FAQ' },
                { id: 'system', label: '⚙️ Seguridad & Backup' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`py-2.5 px-3 border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-[#ef4255] text-white bg-white/[0.04]'
                      : 'border-transparent text-[#8e8c9b] hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Panels */}
            <div className="flex-1 p-5 sm:p-6 overflow-y-auto space-y-5 text-xs">
              {/* TAB 1: PROFILE & SOCIAL */}
              {activeTab === 'profile' && (
                <div className="space-y-4">
                  <h4 className="text-sm font-extrabold text-white pb-2 border-b border-white/10">
                    Datos de Contacto Directo & Redes Sociales
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold uppercase text-[#9e9ba8] mb-1">
                        Nombre del Coach
                      </label>
                      <input
                        type="text"
                        value={formState.coach.name}
                        onChange={(e) =>
                          setFormState({ ...formState, coach: { ...formState.coach, name: e.target.value } })
                        }
                        className="w-full bg-[#08080c] border border-white/20 rounded p-2 text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase text-[#9e9ba8] mb-1">
                        Número de WhatsApp (Solo números con código de país)
                      </label>
                      <input
                        type="text"
                        value={formState.coach.phoneRaw}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            coach: {
                              ...formState.coach,
                              phoneRaw: e.target.value,
                              whatsappUrl: `https://wa.me/${e.target.value.replace(/\D/g, '')}`,
                            },
                          })
                        }
                        placeholder="Ej: 5493874667930"
                        className="w-full bg-[#08080c] border border-white/20 rounded p-2 text-white font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase text-[#9e9ba8] mb-1">
                        WhatsApp (Texto visible)
                      </label>
                      <input
                        type="text"
                        value={formState.coach.phoneDisplay}
                        onChange={(e) =>
                          setFormState({ ...formState, coach: { ...formState.coach, phoneDisplay: e.target.value } })
                        }
                        placeholder="+54 9 387 466-7930"
                        className="w-full bg-[#08080c] border border-white/20 rounded p-2 text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase text-[#9e9ba8] mb-1">
                        Email de Contacto
                      </label>
                      <input
                        type="email"
                        value={formState.coach.email}
                        onChange={(e) =>
                          setFormState({ ...formState, coach: { ...formState.coach, email: e.target.value } })
                        }
                        className="w-full bg-[#08080c] border border-white/20 rounded p-2 text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase text-[#9e9ba8] mb-1">
                        Instagram (Usuario)
                      </label>
                      <input
                        type="text"
                        value={formState.coach.instagram}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            coach: {
                              ...formState.coach,
                              instagram: e.target.value,
                              instagramUrl: `https://www.instagram.com/${e.target.value}/`,
                            },
                          })
                        }
                        className="w-full bg-[#08080c] border border-white/20 rounded p-2 text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase text-[#9e9ba8] mb-1">
                        TikTok (Usuario)
                      </label>
                      <input
                        type="text"
                        value={formState.coach.tiktok}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            coach: {
                              ...formState.coach,
                              tiktok: e.target.value,
                              tiktokUrl: `https://www.tiktok.com/@${e.target.value}`,
                            },
                          })
                        }
                        className="w-full bg-[#08080c] border border-white/20 rounded p-2 text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase text-[#9e9ba8] mb-1">
                        YouTube (Usuario)
                      </label>
                      <input
                        type="text"
                        value={formState.coach.youtube}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            coach: {
                              ...formState.coach,
                              youtube: e.target.value,
                              youtubeUrl: `https://www.youtube.com/@${e.target.value}`,
                            },
                          })
                        }
                        className="w-full bg-[#08080c] border border-white/20 rounded p-2 text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase text-[#9e9ba8] mb-1">
                        Tagline / Lema
                      </label>
                      <input
                        type="text"
                        value={formState.coach.tagline}
                        onChange={(e) =>
                          setFormState({ ...formState, coach: { ...formState.coach, tagline: e.target.value } })
                        }
                        className="w-full bg-[#08080c] border border-white/20 rounded p-2 text-white"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: HERO & TEXTS */}
              {activeTab === 'hero' && (
                <div className="space-y-4">
                  <h4 className="text-sm font-extrabold text-white pb-2 border-b border-white/10">
                    Textos de Portada (Hero Section)
                  </h4>

                  <div>
                    <label className="block text-[10px] font-bold uppercase text-[#9e9ba8] mb-1">
                      Badge Superior (Eyebrow)
                    </label>
                    <input
                      type="text"
                      value={formState.hero.eyebrow}
                      onChange={(e) =>
                        setFormState({ ...formState, hero: { ...formState.hero, eyebrow: e.target.value } })
                      }
                      className="w-full bg-[#08080c] border border-white/20 rounded p-2 text-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[10px] font-bold uppercase text-[#9e9ba8] mb-1">
                        Título Línea 1
                      </label>
                      <input
                        type="text"
                        value={formState.hero.title1}
                        onChange={(e) =>
                          setFormState({ ...formState, hero: { ...formState.hero, title1: e.target.value } })
                        }
                        className="w-full bg-[#08080c] border border-white/20 rounded p-2 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase text-[#ef4255] mb-1">
                        Palabra Resaltada (Rojo)
                      </label>
                      <input
                        type="text"
                        value={formState.hero.titleHighlight}
                        onChange={(e) =>
                          setFormState({ ...formState, hero: { ...formState.hero, titleHighlight: e.target.value } })
                        }
                        className="w-full bg-[#08080c] border border-[#ef4255]/50 rounded p-2 text-[#ef4255] font-bold"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase text-[#9e9ba8] mb-1">
                        Título Línea 3
                      </label>
                      <input
                        type="text"
                        value={formState.hero.title2}
                        onChange={(e) =>
                          setFormState({ ...formState, hero: { ...formState.hero, title2: e.target.value } })
                        }
                        className="w-full bg-[#08080c] border border-white/20 rounded p-2 text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase text-[#9e9ba8] mb-1">
                      Descripción Principal
                    </label>
                    <textarea
                      rows={3}
                      value={formState.hero.description}
                      onChange={(e) =>
                        setFormState({ ...formState, hero: { ...formState.hero, description: e.target.value } })
                      }
                      className="w-full bg-[#08080c] border border-white/20 rounded p-2 text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase text-[#9e9ba8] mb-1">
                      Texto de Garantía / Valoración Gratuita
                    </label>
                    <input
                      type="text"
                      value={formState.hero.guaranteeText}
                      onChange={(e) =>
                        setFormState({ ...formState, hero: { ...formState.hero, guaranteeText: e.target.value } })
                      }
                      className="w-full bg-[#08080c] border border-white/20 rounded p-2 text-white"
                    />
                  </div>
                </div>
              )}

              {/* TAB 3: BIO & COACHING */}
              {activeTab === 'bio' && (
                <div className="space-y-4">
                  <h4 className="text-sm font-extrabold text-white pb-2 border-b border-white/10">
                    Sección Sobre Mí (Estilo Calisrama) & Coaching 1 a 1
                  </h4>

                  {/* Foto de Jorge */}
                  <div className="bg-[#09090d] border border-white/10 p-4 rounded-lg flex flex-col sm:flex-row items-center gap-4">
                    <img
                      src={formState.coach.image}
                      alt="Preview Coach"
                      className="w-20 h-24 object-cover object-[50%_35%] rounded border border-white/20 shrink-0"
                    />
                    <div className="flex-1 w-full space-y-2">
                      <label className="block text-[10px] font-bold uppercase text-[#ef4255]">
                        Cambiar Foto Principal de Jorge
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, 'coach')}
                        className="block w-full text-[10px] text-white/70 file:mr-3 file:py-1.5 file:px-3 file:rounded file:border-0 file:text-[10px] file:font-bold file:bg-[#ef4255] file:text-white hover:file:bg-[#dc203b] cursor-pointer"
                      />
                      <input
                        type="text"
                        value={formState.coach.image}
                        onChange={(e) =>
                          setFormState({ ...formState, coach: { ...formState.coach, image: e.target.value } })
                        }
                        placeholder="O pegá la URL directa de la foto"
                        className="w-full bg-[#050508] border border-white/10 rounded p-1.5 text-xs text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase text-[#9e9ba8] mb-1">
                      Biografía - Párrafo 1
                    </label>
                    <textarea
                      rows={3}
                      value={formState.coach.bioP1}
                      onChange={(e) =>
                        setFormState({ ...formState, coach: { ...formState.coach, bioP1: e.target.value } })
                      }
                      className="w-full bg-[#08080c] border border-white/20 rounded p-2 text-white"
                    />
                  </div>

                  {/* 3 Metrics Strip */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 bg-[#08080c] border border-white/10 rounded">
                      <label className="block text-[9px] uppercase text-[#8e8c9b]">Métrica 1 (Valor)</label>
                      <input
                        type="text"
                        value={formState.metrics.metric1Val}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            metrics: { ...formState.metrics, metric1Val: e.target.value },
                          })
                        }
                        className="w-full bg-[#040406] border border-white/20 rounded p-1 text-white font-bold"
                      />
                      <label className="block text-[9px] uppercase text-[#8e8c9b] mt-1">Etiqueta</label>
                      <input
                        type="text"
                        value={formState.metrics.metric1Label}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            metrics: { ...formState.metrics, metric1Label: e.target.value },
                          })
                        }
                        className="w-full bg-[#040406] border border-white/20 rounded p-1 text-white text-[10px]"
                      />
                    </div>

                    <div className="p-3 bg-[#08080c] border border-white/10 rounded">
                      <label className="block text-[9px] uppercase text-[#ef4255]">Métrica 2 (Valor)</label>
                      <input
                        type="text"
                        value={formState.metrics.metric2Val}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            metrics: { ...formState.metrics, metric2Val: e.target.value },
                          })
                        }
                        className="w-full bg-[#040406] border border-white/20 rounded p-1 text-[#ef4255] font-bold"
                      />
                      <label className="block text-[9px] uppercase text-[#8e8c9b] mt-1">Etiqueta</label>
                      <input
                        type="text"
                        value={formState.metrics.metric2Label}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            metrics: { ...formState.metrics, metric2Label: e.target.value },
                          })
                        }
                        className="w-full bg-[#040406] border border-white/20 rounded p-1 text-white text-[10px]"
                      />
                    </div>

                    <div className="p-3 bg-[#08080c] border border-white/10 rounded">
                      <label className="block text-[9px] uppercase text-[#8e8c9b]">Métrica 3 (Valor)</label>
                      <input
                        type="text"
                        value={formState.metrics.metric3Val}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            metrics: { ...formState.metrics, metric3Val: e.target.value },
                          })
                        }
                        className="w-full bg-[#040406] border border-white/20 rounded p-1 text-white font-bold"
                      />
                      <label className="block text-[9px] uppercase text-[#8e8c9b] mt-1">Etiqueta</label>
                      <input
                        type="text"
                        value={formState.metrics.metric3Label}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            metrics: { ...formState.metrics, metric3Label: e.target.value },
                          })
                        }
                        className="w-full bg-[#040406] border border-white/20 rounded p-1 text-white text-[10px]"
                      />
                    </div>
                  </div>

                  {/* Coaching Features List */}
                  <div className="space-y-3 pt-2">
                    <span className="block text-[11px] font-bold uppercase text-white">
                      Beneficios Clave del Coaching 1 a 1:
                    </span>
                    <div>
                      <input
                        type="text"
                        value={formState.coachingFeatures.item1Desc}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            coachingFeatures: { ...formState.coachingFeatures, item1Desc: e.target.value },
                          })
                        }
                        className="w-full bg-[#08080c] border border-white/20 rounded p-2 text-white"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        value={formState.coachingFeatures.item2Desc}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            coachingFeatures: { ...formState.coachingFeatures, item2Desc: e.target.value },
                          })
                        }
                        className="w-full bg-[#08080c] border border-white/20 rounded p-2 text-white"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        value={formState.coachingFeatures.item3Desc}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            coachingFeatures: { ...formState.coachingFeatures, item3Desc: e.target.value },
                          })
                        }
                        className="w-full bg-[#08080c] border border-white/20 rounded p-2 text-white"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 4: SKILLS */}
              {activeTab === 'skills' && (
                <div className="space-y-4">
                  <h4 className="text-sm font-extrabold text-white pb-2 border-b border-white/10">
                    Habilidades del Catálogo (Skill Map)
                  </h4>

                  <div className="space-y-4">
                    {formState.skills.map((sk, idx) => (
                      <div key={sk.id} className="p-4 bg-[#08080c] border border-white/15 rounded-lg space-y-3">
                        <div className="flex items-center justify-between">
                          <strong className="text-sm font-bold text-white uppercase">{sk.name}</strong>
                          <span className="text-[10px] text-[#ef4255] font-mono">ID: {sk.id}</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[9px] uppercase text-[#9e9ba8]">Nombre visible</label>
                            <input
                              type="text"
                              value={sk.name}
                              onChange={(e) => {
                                const newSkills = [...formState.skills];
                                newSkills[idx].name = e.target.value;
                                setFormState({ ...formState, skills: newSkills });
                              }}
                              className="w-full bg-[#040406] border border-white/20 rounded p-1.5 text-white"
                            />
                          </div>

                          <div>
                            <label className="block text-[9px] uppercase text-[#9e9ba8]">Subtítulo corto</label>
                            <input
                              type="text"
                              value={sk.shortDesc}
                              onChange={(e) => {
                                const newSkills = [...formState.skills];
                                newSkills[idx].shortDesc = e.target.value;
                                setFormState({ ...formState, skills: newSkills });
                              }}
                              className="w-full bg-[#040406] border border-white/20 rounded p-1.5 text-white"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[9px] uppercase text-[#9e9ba8]">Ruta o URL de Imagen</label>
                          <input
                            type="text"
                            value={sk.image}
                            onChange={(e) => {
                              const newSkills = [...formState.skills];
                              newSkills[idx].image = e.target.value;
                              setFormState({ ...formState, skills: newSkills });
                            }}
                            className="w-full bg-[#040406] border border-white/20 rounded p-1.5 text-white"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 5: FAQ */}
              {activeTab === 'faq' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <h4 className="text-sm font-extrabold text-white">Preguntas Frecuentes (FAQ)</h4>
                    <button
                      type="button"
                      onClick={() => {
                        setFormState({
                          ...formState,
                          faq: [
                            ...formState.faq,
                            { question: 'Nueva pregunta frecuente', answer: 'Respuesta correspondiente aquí.' },
                          ],
                        });
                      }}
                      className="bg-[#ef4255] text-white px-2.5 py-1 rounded text-[10px] font-bold hover:bg-[#dc203b]"
                    >
                      + Agregar Pregunta
                    </button>
                  </div>

                  <div className="space-y-3">
                    {formState.faq.map((item, idx) => (
                      <div key={idx} className="p-3 bg-[#08080c] border border-white/10 rounded-lg space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold text-[#ef4255]">Pregunta 0{idx + 1}</span>
                          <button
                            type="button"
                            onClick={() => {
                              const newFaq = formState.faq.filter((_, i) => i !== idx);
                              setFormState({ ...formState, faq: newFaq });
                            }}
                            className="text-[10px] text-red-400 hover:text-red-300 font-bold"
                          >
                            Eliminar
                          </button>
                        </div>
                        <input
                          type="text"
                          value={item.question}
                          onChange={(e) => {
                            const newFaq = [...formState.faq];
                            newFaq[idx].question = e.target.value;
                            setFormState({ ...formState, faq: newFaq });
                          }}
                          className="w-full bg-[#040406] border border-white/20 rounded p-1.5 text-white font-semibold"
                        />
                        <textarea
                          rows={2}
                          value={item.answer}
                          onChange={(e) => {
                            const newFaq = [...formState.faq];
                            newFaq[idx].answer = e.target.value;
                            setFormState({ ...formState, faq: newFaq });
                          }}
                          className="w-full bg-[#040406] border border-white/20 rounded p-1.5 text-white text-[11px]"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 6: SYSTEM & SECURITY */}
              {activeTab === 'system' && (
                <div className="space-y-6">
                  {/* Change Password */}
                  <div className="p-4 bg-[#08080c] border border-white/10 rounded-lg space-y-3">
                    <h5 className="font-bold text-white text-xs uppercase text-[#ef4255]">
                      Cambiar Contraseña del Administrador
                    </h5>
                    <form onSubmit={handlePasswordChangeSubmit} className="flex gap-2">
                      <input
                        type="password"
                        placeholder="Nueva contraseña (mínimo 6 caracteres)"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="flex-1 bg-[#040406] border border-white/20 rounded px-3 py-1.5 text-xs text-white"
                      />
                      <button type="submit" className="jm-btn-primary py-1.5 px-4 text-[11px]">
                        Actualizar
                      </button>
                    </form>
                    {passChangeSuccess && (
                      <p className="text-[11px] text-[#4ade80] font-bold">{passChangeSuccess}</p>
                    )}
                  </div>

                  {/* Backup / Export */}
                  <div className="p-4 bg-[#08080c] border border-white/10 rounded-lg space-y-3">
                    <h5 className="font-bold text-white text-xs uppercase">Copia de Seguridad & Respaldo</h5>
                    <p className="text-[11px] text-[#8e8c9b]">
                      Descargá un archivo con toda la configuración actual de tu web para guardarla en tu computadora o restaurarla cuando quieras.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={handleExport}
                        className="bg-[#24242e] hover:bg-[#32323e] border border-white/20 text-white font-bold py-2 px-4 rounded text-[11px]"
                      >
                        📥 Descargar Copia de Seguridad (JSON)
                      </button>

                      <label className="bg-[#24242e] hover:bg-[#32323e] border border-white/20 text-white font-bold py-2 px-4 rounded text-[11px] cursor-pointer">
                        📤 Restaurar Copia (Subir archivo)
                        <input
                          type="file"
                          accept=".json"
                          onChange={handleImport}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>

                  {/* Reset defaults */}
                  <div className="p-4 bg-[#1b0d10] border border-red-500/30 rounded-lg space-y-2">
                    <h5 className="font-bold text-red-400 text-xs uppercase">Zona de Peligro</h5>
                    <p className="text-[11px] text-white/70">
                      Restablece todos los textos, imágenes y redes a los valores originales de fábrica.
                    </p>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="bg-red-600 hover:bg-red-700 text-white font-bold py-1.5 px-3 rounded text-[10px]"
                    >
                      Restablecer Valores Originales
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Footer Actions */}
            <div className="p-4 border-t border-white/[0.1] bg-[#0c0c10] flex items-center justify-between gap-3">
              <span className="text-[10px] text-[#7d7a8c] hidden sm:inline">
                Atajo para abrir/cerrar este panel: <strong className="text-white/60">Ctrl + Shift + A</strong>
              </span>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <button
                  type="button"
                  onClick={() => {
                    setIsAdminOpen(false);
                    window.location.hash = '';
                  }}
                  className="px-4 py-2 rounded text-xs font-bold text-white/70 hover:text-white"
                >
                  Cerrar
                </button>

                <button
                  type="button"
                  onClick={handleSave}
                  className="jm-btn-primary px-6 py-2.5 text-xs font-extrabold uppercase shadow-xl"
                >
                  <span>GUARDAR CAMBIOS</span>
                  <span>✓</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
