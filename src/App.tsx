import { useState, useEffect } from "react";
import PageTransition from "./components/PageTransition";
import InicioMobile from "./imports/InicioMobile";
import InicioDesktop from "./imports/InicioDesktop";
import OCursoDesktop from "./imports/OCursoDesktop";
import JoinInDesktop from "./imports/JoinInDesktop";
import TrabalhosAlunos from "./components/TrabalhosAlunos";
import { TrabalhoDoAluno } from "./components/TrabalhoDoAluno";
import Contato from "./components/Contato";
import FAQ from "./components/FAQ";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";
import { AdminInscricoes } from "./components/AdminInscricoes";
import AdminDashboard from "./components/AdminDashboard";
import AdminFinanceiro from "./components/AdminFinanceiro";
import { PainelAdminPagamentos } from "./components/PainelAdminPagamentos";
import { PainelAdminTextos } from "./components/PainelAdminTextos";
import { PerfilAluno } from "./components/PerfilAluno";
import Acesso from "./components/Acesso";
import AreaAluno from "./components/AreaAluno";
import { studentsData } from "./data/students";
import { getBlogPostById } from "./data/blogPosts";

type Page =
  | "inicio"
  | "ocurso"
  | "joinin"
  | "trabalhos"
  | "trabalho"
  | "contato"
  | "blog"
  | "blogpost"
  | "faq"
  | "admin"
  | "perfil"
  | "admindashboard"
  | "adminfinanceiro"
  | "adminpagamentos"
  | "admintextos"
  | "acesso"
  | "areaaluno";

export default function App() {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < 768,
  );
  const [currentPage, setCurrentPage] =
    useState<Page>("inicio");
  const [selectedStudentId, setSelectedStudentId] = useState<
    number | null
  >(null);
  const [selectedBlogPostId, setSelectedBlogPostId] = useState<
    number | null
  >(null);
  const [navigationHistory, setNavigationHistory] = useState<
    Array<{
      page: Page;
      studentId?: number | null;
      blogPostId?: number | null;
      scrollPosition?: number;
    }>
  >([]);
  const [navigationDirection, setNavigationDirection] =
    useState<"forward" | "backward">("forward");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () =>
      window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavigate = (page: string, id?: number) => {
    // Salvar estado atual no histórico antes de navegar
    if (currentPage) {
      setNavigationHistory((prev) => [
        ...prev,
        {
          page: currentPage,
          studentId: selectedStudentId,
          blogPostId: selectedBlogPostId,
          scrollPosition: window.scrollY,
        },
      ]);
    }

    if (page.toLowerCase() === "inicio") {
      setCurrentPage("inicio");
      setSelectedStudentId(null);
      setSelectedBlogPostId(null);
    } else if (page.toLowerCase() === "ocurso") {
      setCurrentPage("ocurso");
      setSelectedStudentId(null);
      setSelectedBlogPostId(null);
    } else if (page.toLowerCase() === "joinin") {
      setCurrentPage("joinin");
      setSelectedStudentId(null);
      setSelectedBlogPostId(null);
    } else if (
      page.toLowerCase() === "trabalhos" ||
      page.toLowerCase() === "nossosalunos"
    ) {
      setCurrentPage("trabalhos");
      setSelectedStudentId(null);
      setSelectedBlogPostId(null);
    } else if (page.toLowerCase() === "trabalho" && id) {
      setCurrentPage("trabalho");
      setSelectedStudentId(id);
      setSelectedBlogPostId(null);
    } else if (page.toLowerCase() === "student" && id) {
      setCurrentPage("trabalho");
      setSelectedStudentId(id);
      setSelectedBlogPostId(null);
    } else if (page.toLowerCase() === "contato") {
      setCurrentPage("contato");
      setSelectedStudentId(null);
      setSelectedBlogPostId(null);
    } else if (page.toLowerCase() === "blog") {
      setCurrentPage("blog");
      setSelectedStudentId(null);
      setSelectedBlogPostId(null);
    } else if (page.toLowerCase() === "blogpost" && id) {
      setCurrentPage("blogpost");
      setSelectedStudentId(null);
      setSelectedBlogPostId(id);
    } else if (page.toLowerCase() === "faq") {
      setCurrentPage("faq");
      setSelectedStudentId(null);
      setSelectedBlogPostId(null);
    } else if (page.toLowerCase() === "admin") {
      setCurrentPage("admin");
      setSelectedStudentId(null);
      setSelectedBlogPostId(null);
    } else if (page.toLowerCase() === "perfil") {
      setCurrentPage("perfil");
      setSelectedStudentId(null);
      setSelectedBlogPostId(null);
    } else if (page.toLowerCase() === "admindashboard") {
      setCurrentPage("admindashboard");
      setSelectedStudentId(null);
      setSelectedBlogPostId(null);
    } else if (page.toLowerCase() === "adminfinanceiro") {
      setCurrentPage("adminfinanceiro");
      setSelectedStudentId(null);
      setSelectedBlogPostId(null);
    } else if (page.toLowerCase() === "adminpagamentos") {
      setCurrentPage("adminpagamentos");
      setSelectedStudentId(null);
      setSelectedBlogPostId(null);
    } else if (page.toLowerCase() === "admintextos") {
      setCurrentPage("admintextos");
      setSelectedStudentId(null);
      setSelectedBlogPostId(null);
    } else if (page.toLowerCase() === "acesso") {
      setCurrentPage("acesso");
      setSelectedStudentId(null);
      setSelectedBlogPostId(null);
    } else if (page.toLowerCase() === "areaaluno") {
      setCurrentPage("areaaluno");
      setSelectedStudentId(null);
      setSelectedBlogPostId(null);
    }
    window.scrollTo(0, 0);
    setNavigationDirection("forward");
  };

  // Expor função de navegação globalmente para os componentes importados
  useEffect(() => {
    (window as any).navigateTo = (
      page: string,
      id?: number,
    ) => {
      handleNavigate(page, id);
    };

    (window as any).goBack = () => {
      handleGoBack();
    };

    return () => {
      delete (window as any).navigateTo;
      delete (window as any).goBack;
    };
  }, [navigationHistory]);

  const handleGoBack = () => {
    if (navigationHistory.length > 0) {
      const previousState =
        navigationHistory[navigationHistory.length - 1];
      setNavigationHistory((prev) => prev.slice(0, -1));

      setCurrentPage(previousState.page);
      setSelectedStudentId(previousState.studentId || null);
      setSelectedBlogPostId(previousState.blogPostId || null);
      setNavigationDirection("backward");

      // Restaurar posição de scroll após a renderização
      setTimeout(() => {
        if (previousState.scrollPosition !== undefined) {
          window.scrollTo(0, previousState.scrollPosition);
        }
      }, 0);
    } else {
      // Se não houver histórico, vai para o início
      handleNavigate("inicio");
    }
  };

  const selectedStudent = selectedStudentId
    ? studentsData.find((s) => s.id === selectedStudentId)
    : null;

  const selectedBlogPost = selectedBlogPostId
    ? getBlogPostById(selectedBlogPostId)
    : null;

  return (
    <div className="min-h-screen relative">
      {currentPage === "inicio" && (
        <PageTransition
          pageKey={`inicio-${isMobile ? "mobile" : "desktop"}`}
          direction={navigationDirection}
          animationType="dramatic"
        >
          {isMobile ? <InicioMobile /> : <InicioDesktop />}
        </PageTransition>
      )}
      {currentPage === "ocurso" && (
        <PageTransition
          pageKey="ocurso"
          direction={navigationDirection}
        >
          <OCursoDesktop />
        </PageTransition>
      )}
      {currentPage === "joinin" && (
        <PageTransition
          pageKey="joinin"
          direction={navigationDirection}
          animationType="special"
        >
          <JoinInDesktop />
        </PageTransition>
      )}
      {currentPage === "trabalhos" && (
        <PageTransition
          pageKey="trabalhos"
          direction={navigationDirection}
        >
          <TrabalhosAlunos navigateTo={handleNavigate} />
        </PageTransition>
      )}
      {currentPage === "trabalho" && selectedStudent && (
        <PageTransition
          pageKey={`trabalho-${selectedStudentId}`}
          direction={navigationDirection}
        >
          <TrabalhoDoAluno
            student={selectedStudent}
            onNavigate={handleNavigate}
          />
        </PageTransition>
      )}
      {currentPage === "contato" && (
        <PageTransition
          pageKey="contato"
          direction={navigationDirection}
        >
          <Contato navigateTo={handleNavigate} />
        </PageTransition>
      )}
      {currentPage === "blog" && (
        <PageTransition
          pageKey="blog"
          direction={navigationDirection}
        >
          <Blog navigateTo={handleNavigate} />
        </PageTransition>
      )}
      {currentPage === "blogpost" && selectedBlogPost && (
        <PageTransition
          pageKey={`blogpost-${selectedBlogPostId}`}
          direction={navigationDirection}
        >
          <BlogPost
            post={selectedBlogPost}
            navigateTo={handleNavigate}
          />
        </PageTransition>
      )}
      {currentPage === "faq" && (
        <PageTransition
          pageKey="faq"
          direction={navigationDirection}
        >
          <FAQ navigateTo={handleNavigate} />
        </PageTransition>
      )}
      {currentPage === "admin" && (
        <PageTransition
          pageKey="admin"
          direction={navigationDirection}
        >
          <AdminInscricoes navigateTo={handleNavigate} />
        </PageTransition>
      )}
      {currentPage === "admindashboard" && (
        <PageTransition
          pageKey="admindashboard"
          direction={navigationDirection}
        >
          <AdminDashboard navigateTo={handleNavigate} />
        </PageTransition>
      )}
      {currentPage === "adminfinanceiro" && (
        <PageTransition
          pageKey="adminfinanceiro"
          direction={navigationDirection}
        >
          <AdminFinanceiro navigateTo={handleNavigate} />
        </PageTransition>
      )}
      {currentPage === "adminpagamentos" && (
        <PageTransition
          pageKey="adminpagamentos"
          direction={navigationDirection}
        >
          <PainelAdminPagamentos navigateTo={handleNavigate} />
        </PageTransition>
      )}
      {currentPage === "admintextos" && (
        <PageTransition
          pageKey="admintextos"
          direction={navigationDirection}
        >
          <PainelAdminTextos navigateTo={handleNavigate} />
        </PageTransition>
      )}
      {currentPage === "perfil" && (
        <PageTransition
          pageKey="perfil"
          direction={navigationDirection}
        >
          <PerfilAluno navigateTo={handleNavigate} />
        </PageTransition>
      )}
      {currentPage === "acesso" && (
        <PageTransition
          pageKey="acesso"
          direction={navigationDirection}
        >
          <Acesso navigateTo={handleNavigate} />
        </PageTransition>
      )}
      {currentPage === "areaaluno" && (
        <PageTransition
          pageKey="areaaluno"
          direction={navigationDirection}
        >
          <AreaAluno navigateTo={handleNavigate} />
        </PageTransition>
      )}
    </div>
  );
}