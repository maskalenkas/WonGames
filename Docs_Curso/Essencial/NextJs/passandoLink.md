## 1
**Atraves de um componente que não é um <a> e não possui as**
<S.LogoWrapper>
<Link href="/" passHref>
  <a>
    <Logo hideOnMobile />
  </a>
  </Link>
</S.LogoWrapper>


## 2
**Atraves de um styled que é um A**
 <Link href="/sign-up" passHref>
  <S.CreateAccount title="Sign Up">Sign Up</S.CreateAccount>
</Link>

*export const CreateAccount = styled.a`*


## 3 
**Atraves de um componente que possui A (ou o wrapper é um A)**
 <Link href="/sign-in" passHref>
  <Button as="a">Sign in</Button>
</Link>

const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  {
    minimal = false,
    ...props
  },
  *Recebendo a referencia e passando para o wrapper*
  ref,
) => (
  <S.Wrapper
    minimal={minimal}
    ref={ref}
  >